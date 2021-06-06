import{useState} from "react";

interface Contacto{
    nombre: string,
    apellidos: string,
    correo: string,
    mensaje: string
}

export default function ContactForm(){
    
    const[contacto, setcontacto] = useState<Contacto>({
        nombre: '',
        apellidos: '',
        correo: '',
        mensaje: ''
    }); 

    const handlerSubmit = (event: any): void => {
        event.preventDefault();
        setcontacto({
            nombre: '',
            apellidos: '',
            correo: '',
            mensaje: ''
        })
        alert(JSON.stringify(contacto));
    };

    const handlerInput= (event: any): void => {
        setcontacto({
            ...contacto,
            [event.target.name] : event.target.value
        })
    };

    return(
        <section id="section-contact">
            <form className="ui form" onSubmit={handlerSubmit}>
                <div className="field">
                    <label>Nombre</label>
                    <input type="text" name="first-name" placeholder="Nombre" onChange={handlerInput} required/>
                </div>
                <div className="field">
                    <label>Apellido Paterno</label>
                    <input type="text" name="last-name" placeholder="Apellido" onChange={handlerInput} required/>
                </div>    
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Correo electronico" onChange={handlerInput} required/>
                </div> 
                <div className="field">
                    <label>Comentario</label>
                    <textarea></textarea>
                </div>             
                <button className="ui button" type="submit">Guardar</button>
            </form>
            <br/>
            <br/>
            <br/>
        </section>
    )
}