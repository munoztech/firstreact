import React from "react";

const App = () => {
    let botones = <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" class="btn btn-secondary">Editar</button>
        <button type="button" class="btn btn-success">Eliminar</button>
    </div>
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-8">
                    <h1>Estudiantes</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Equipo</th>
                                <th scope="col">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Javiera</td>
                                <td>Muñoz</td>
                                <td>8</td>
                                <td>{botones}</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Iabella</td>
                                <td>Parry</td>
                                <td>4</td>
                                <td>{botones}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-4">
                    <h1>Formulario</h1>
                    <div class="row g-4">
                        <div class="col-12">
                            <label className="form-label">Ingresa tu Nombre</label>
                            <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre" />
                        </div>
                        <div class="col-12">
                            <label className="form-label">Ingresa tu Apellido</label>
                            <input type="text" class="form-control" placeholder="Apellido" aria-label="Apellido" />
                        </div>
                        <div class="col-12">
                            <label className="form-label">Ingresa tu Equipo</label>
                            <input type="text" class="form-control" placeholder="Equipo" aria-label="Equipo" />
                        </div>
                        <input class="btn btn-primary" type="button" value="Guardar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;