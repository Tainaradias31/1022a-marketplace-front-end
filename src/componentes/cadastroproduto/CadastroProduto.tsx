import{ ChangeEvent, EventHandler, FormEvent, InputHTMLAttributes} from "react"

function CadastroProduto(){
    function handleForm(event:FormEvent){
        event.preventDefault()
        console.log("Cliquei em cadastrar")
        //Pegar os valores do campo
        //Mandar pelo facth para o Back-End
    }
    function handleId(event:ChangeEvent<InputHTMLlement>){
        setId(event.target.value)

    }
    
    
    return(
        <>
     <h1>Meu Componenete de Cadastro de Produtos</h1>
     <form onSubmit={handleForm}>
     <div>
         <input placeholder= "id" type="text" name="id" id="id" onClick={handleId}/>
         </div>
       <div>
         <input placeholder= "Nome" type="text" name="nome" id="nome" />
         </div>
       <div>
         <input placeholder= "Descrição" type="text" name="descricao" id="descricao" />
       </div>
       <div>
         <input placeholder= "preço" type="text" name="preco" id="preco" />
         </div>
       <div>
         <input placeholder= "URL imagem" type="text" name="iamgem" id="imagem" />
         </div>
         <input type="submit" value="Cadastrar" />
    </form>
     </>
    )
 }
 
 export default CadastroProduto
 