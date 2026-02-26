import { createClient } from "https://esm.sh/@supabase/supabase-js"
const supabaseUrl = 'https://behktqcgvgrsrdklkhkg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlaGt0cWNndmdyc3Jka2xraGtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4NzExNzMsImV4cCI6MjA4NzQ0NzE3M30.UoWwqh_SgZ2pN3LGNb0ozyuRLwANtLoCcITUS2M38Rg'
const supabase = createClient(supabaseUrl, supabaseKey)



async function getBooks() {
  let { data: books, error } = await supabase
  .from('books')
  .select('*')
  
  for (let book of books) {
    let bookList = document.getElementById('books');
    bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td></tr>`;
  }
}

getBooks();