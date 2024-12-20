package main

import (
	"github.com/MaeMae46/MM-Se-67/backend/entity"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func main() {
	db, err := gorm.Open(sqlite.Open("sa-67.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	db.AutoMigrate(&entity.Catagory{}, &entity.History{}, &entity.HistoryDetail{}, &entity.Order{}, &entity.OrderItem{}, &entity.Product{}, &entity.Stock{}, &entity.User{})
}