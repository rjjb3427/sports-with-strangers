class User < ActiveRecord::Base
  validates :email, :password_digest, :location, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validate :valid_email_address
  after_initialize :ensure_session_token
  before_validation :set_city_id, :format_email, :set_default_image

  attr_reader :password
  belongs_to :city

  has_many :events,
  foreign_key: :host_id

  has_many :reservations,
  class_name: :Attendee

  has_many :attending,
  through: :reservations,
  source: :event

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    email.downcase! unless email.nil?
    @user = User.find_by(email: email)
    if @user && @user.is_password?(password)
      return @user
    else
      return nil
    end
  end

  def set_default_image
    if self.image.length < 1
      self.image = "http://res.cloudinary.com/dlxtsqgb3/image/upload/c_scale,h_700,w_700/v1484789224/profblank_ionat1.png"
    end
  end

  def valid_email_address
    email = self.email.downcase unless self.email.nil?
    validity = email.scan(/\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/)
    if (validity.empty?)
      errors.add(:email, 'must be valid')
    end
  end

  def format_email
    self.email.downcase! unless self.email.nil?
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

  def set_city_id
    city = City.find_by(name: self.location)
    self.city_id = city.id if city
  end

end
