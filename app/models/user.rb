class User < ActiveRecord::Base
  validates :email, :password_digest, :location, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validate :valid_email_address
  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness, :set_city_id, :format_email

  attr_reader :password
  belongs_to :city

  has_many :events,
  foreign_key: :host_id

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    email.downcase!
    @user = User.find_by(email: email)
    if @user && @user.is_password?(password)
      return @user
    else
      return nil
    end
  end

  def valid_email_address
    email = self.email.downcase
    validity = email.scan(/\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/)
    if (validity.empty?)
      errors.add(:email, 'must be valid')
    end
  end

  def format_email
    self.email.downcase!
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end


  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
  end

  def set_city_id
    city = City.find_by(name: self.location)
    self.city_id = city.id if city
  end

end
