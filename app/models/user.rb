class User < ActiveRecord::Base
  validates :first_name, :password_digest, :location, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness
  attr_reader :password

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(first_name, password)
    @user = User.find_by(first_name: first_name)
    if @user && @user.is_password?(password)
      return @user
    else
      return nil
    end
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

end
