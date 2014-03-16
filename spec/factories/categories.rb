# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :category do
    title "MyString"
    color_id 1
    icon "MyString"
    custom false
  end
end
