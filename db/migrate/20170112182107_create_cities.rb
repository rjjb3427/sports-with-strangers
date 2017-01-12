class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
      t.string :name, null: false
      t.string :image, null: false
      t.string :tagline
      t.timestamps null: false
    end
  end
end
