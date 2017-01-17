class CreateAttendees < ActiveRecord::Migration
  def change
    create_table :attendees do |t|
      t.integer :event_id, null: false
      t.integer :user_id, null: false
      t.timestamp :created_at
    end
    add_index(:attendees, [:event_id, :user_id])
  end
end
