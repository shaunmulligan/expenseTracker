class AddUserIdToRecords < ActiveRecord::Migration
  def change
    add_column :records, :user_id, :integer
    add_index :records, :user_id
  end
end
