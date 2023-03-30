// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Buon lavoro e buon divertimento! 
const { createApp } = Vue;

createApp ({
    data(){
        return {
            todos: [
                {
                    text: "Fare la spesa",
                    done: false,
                },
                {
                    text: "Fare la lavatrice",
                    done: false,
                },
                {
                    text: "Andare in banca",
                    done: false,
                },
                {
                    text: "Prendere appuntamento dal dottore",
                    done: false,
                },
            ],
            error: false,
            newTodo: {
                text: "",
                done: false,
            },
        };
    },
    methods: {
        addTodo() {
            // this.newTodo = this.newTodo.trim();
            if(this.newTodo.text.length > 0) {
                this.error = false;
                this.newTodo.text = this.newTodo.text[0].toUpperCase() + this.newTodo.text.substring(1);
                this.todos.unshift({...this.newTodo} );
                this.newTodo.text = "";
                
    
            } else {
                this.error = true;
            }
        },
      }
}).mount("#app");