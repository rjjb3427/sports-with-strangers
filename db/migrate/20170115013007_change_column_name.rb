class ChangeColumnName < ActiveRecord::Migration
  def change
    rename_column :users, :first_name, :email
    rename_column :users, :last_name, :name
  end
end
