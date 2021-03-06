# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170116185035) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attendees", force: :cascade do |t|
    t.integer  "event_id",   null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at"
  end

  add_index "attendees", ["event_id", "user_id"], name: "index_attendees_on_event_id_and_user_id", using: :btree

  create_table "cities", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "image",      null: false
    t.string   "tagline"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.integer  "host_id",  null: false
    t.integer  "city_id",  null: false
    t.string   "title",    null: false
    t.string   "address",  null: false
    t.string   "sport",    null: false
    t.integer  "capacity"
    t.datetime "time",     null: false
  end

  add_index "events", ["host_id", "city_id"], name: "index_events_on_host_id_and_city_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "name"
    t.string   "password_digest", null: false
    t.string   "location",        null: false
    t.string   "session_token",   null: false
    t.string   "image"
    t.integer  "city_id"
    t.text     "blurb"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["city_id"], name: "index_users_on_city_id", using: :btree
  
end
