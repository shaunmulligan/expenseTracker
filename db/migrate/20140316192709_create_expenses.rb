class CreateExpenses < ActiveRecord::Migration
  def change
    create_table :expenses do |t|
      t.decimal :amount
      t.datetime :time
      t.date :date
      t.string :location
      t.integer :category_id
      t.integer :user_id

      t.timestamps
    end
  end
end
