class CreateConsoles < ActiveRecord::Migration[6.1]
  def change
    create_table :consoles do |t|

      t.timestamps
    end
  end
end
