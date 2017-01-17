class City < ActiveRecord::Base
  validates :name, :tagline, :image, presence: true
  validates :tagline, uniqueness: true 
  has_many :users
  has_many :events
end
