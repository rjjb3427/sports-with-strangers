class Event < ActiveRecord::Base
  validates :city, :host, :title, :address, :sport, :time, presence: true
  validates :title, uniqueness: true

  belongs_to :host,
  class_name: :User

  belongs_to :city

  has_many :attendees

  has_many :attending_users,
  through: :attendees,
  source: :user
end
