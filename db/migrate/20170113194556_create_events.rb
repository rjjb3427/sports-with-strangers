class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :host_id, null: false
      t.integer :city_id, null: false
      t.string :title, null: false
      t.string :address, null: false
      t.string :sport, null: false
      t.integer :capacity
      t.datetime :time, null: false
    end
    add_index(:events, [:host_id, :city_id])
  end
end
