class Attendee < ActiveRecord::Base
  validates :user_id, :event_id, presence: true
  validate :unique_entree
  belongs_to :event
  belongs_to :user

  def unique_entree
    double = Attendee.find_by(user_id: self.user_id, event_id: self.event_id)
    if double
      errors.add(:event, 'must be valid')
    end
  end
end
