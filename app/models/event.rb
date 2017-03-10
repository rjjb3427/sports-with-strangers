class Event < ActiveRecord::Base
  validates :city, :host, :title, :address, :sport, :time, presence: true
  validates :title, length: { minimum: 4, maximum: 40}
  validates :address, length: {maximum: 40}
  validate :capacity_range
  validate :valid_address
  validates :title, uniqueness: true

  belongs_to :host,
  class_name: :User

  belongs_to :city

  has_many :attendees

  has_many :attending_users,
  through: :attendees,
  source: :user
  def capacity_range
    capacity = self.capacity
    errors.add(:capacity, "cannot be zero") unless capacity > 0
    errors.add(:capacity, "is too large") if capacity > 20
  end

  def valid_address
    address = self.address
    nums = address.scan(/\d+/)
    chars = address.scan(/\w+/)
    if nums.length.zero? || chars.length.zero?
      errors.add(:address, "must be valid")
    end 
  end
end
