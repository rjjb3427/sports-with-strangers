class City < ActiveRecord::Base
  validates :name, :tagline, :image, presence: true
  has_many :users
  has_many :events
end
