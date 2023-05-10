package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type fruit struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
	Icon string `json:"icon"`
}

type Param struct {
	Name string `json:"name"`
}

var fruits = []fruit{
	{ID: 1, Name: "apple", Icon: "🍎"},
	{ID: 2, Name: "banana", Icon: "🍌"},
	{ID: 3, Name: "grape", Icon: "🍇"},
}

func main() {
	http.HandleFunc("/", getFruits)
	fmt.Println("Starting server at port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func getFruits(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5174")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Control-Allow-Methods", "POST")

	if r.Method == "POST" {
		// 変数を定義
		var param Param
		// デコードして変数へ値を格納する
		if err := json.NewDecoder(r.Body).Decode(&param); err != nil {
			log.Fatal(err)
		}
		fmt.Println("Name:", param.Name)
	}

	json.NewEncoder(w).Encode(fruits)
}
