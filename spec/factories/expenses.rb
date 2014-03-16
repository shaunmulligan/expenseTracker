# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :expense do
    amount "9.99"
    time "2014-03-16 20:27:09"
    date "2014-03-16"
    location "MyString"
    category_id 1
    user_id 1
  end
end
