class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name
      t.string :password_digest, null: false
      t.string :location, null: false
      t.string :session_token, null: false
      t.string :image
      t.integer :city_id, index: true
      t.text :blurb
      t.timestamps null: false
    end
  end
end
