class AddNameToConsole < ActiveRecord::Migration[6.1]
  def change
    add_column :consoles, :name, :string
  end
end
