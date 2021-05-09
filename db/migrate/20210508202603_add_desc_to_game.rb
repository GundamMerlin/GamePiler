class AddDescToGame < ActiveRecord::Migration[6.1]
  def change
    add_column :games, :description, :string
  end
end
