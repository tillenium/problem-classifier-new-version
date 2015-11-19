require 'csv'
class CreateProblems < ActiveRecord::Migration
  def up
    create_table :problems do |t|
      t.string :name, null: false
      t.string :link, null: false
      t.string :tags, null: false
      t.timestamps null: false
    end

    problems =  CSV.read("#{Rails.root}/public/spoj-problem-classifier.csv")
    problems.each do |problem|
      puts problem
      Problem.new(name: problem[0], link: problem[1], tags: problem[2]).save!
    end
  end

  def down
    drop_table :problems
  end
end
