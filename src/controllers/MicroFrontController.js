const Pais = require('../models/Pais')

class MicroFrontController{
    static async obtenerMicroFronts({res}) {
        const microfronts = [
            {
                name: '@fs/home',
                appName: 'http://localhost:4200/main.js',
                route: '/',
            },
            {
                name: '@fs/header',
                appName: 'http://localhost:4300/main.js',
                route: '/',
            },
            {
                name: '@fs/footer',
                appName: 'http://localhost:4301/main.js',
                route: '/',
            },
            {
                appName: 'http://localhost:4201/main.js',
                enabled: true,
                name: '@nectia/documentos',
                route: 'documentos',
            },
            {
                appName: 'http://localhost:4202/main.js',
                enabled: true,
                name: '@nectia/cobranza',
                route: 'cobranza/',
            },
            {
                appName: 'http://localhost:4204/main.js',
                enabled: true,
                name: '@nectia/informes',
                route: 'informes',
            },
            {
                appName: 'http://localhost:4207/main.js',
                enabled: true,
                name: '@nectia/productos',
                route: 'productos',
            }
        ]
        res.json(microfronts);
    }

    static async dataGridExample({res}){
        const data = [
            { ejemplo: 'A' },
            { ejemplo: 'Z' },
            { ejemplo: 'B' },
            { ejemplo: 'F' },
            { ejemplo: 'D' },
            { ejemplo: 'E' }
          ]
        res.json(data)
    }

    static async ejecutivo({ res }) {
        const data  = {
        ejecutivo: {
            nombre: 'Nicole Currin',
            fono: '225843763',
            correo: 'nicole.currin@security.cl'
          },
          asistente: {
            nombre: 'Nicole Currin',
            fono: '225843763',
            correo: 'nicole.currin@security.cl'
          },
          gestionador: {
            nombre: 'Nicole Currin',
            fono: '225843763',
            correo: 'nicole.currin@security.cl'
          }
        }
        setTimeout(() => {
            res.json(data)
        }, 2000)
    }

    static async documentacionEstudioPoderes({ res }) {
        const data = [
            { nombreTipoDocumento: 'Documento Estudio de Poder 1', codigoTipoDocumento: 'CODIGO1' },
            { nombreTipoDocumento: 'Documento Estudio de Poder 2', codigoTipoDocumento: 'CODIGO2' },
            { nombreTipoDocumento: 'Documento Estudio de Poder 3', codigoTipoDocumento: 'CODIGO3' }

        ]
        res.json({ 
            respuesta: {
                datos: data
            }
        })
    }

    static async getPaises({ res }) {
        const pais = await Pais.find({});
        res.json({ 
            respuesta: {
                datos: pais
            }
        })
    }

    static async empresaDatos({ res }) {
        const datos = {
            razonSocial: '',
            nombreFantasia: '',
            actividadEconomica: '',
            sitioWeb: '',
            calle: '',
            numeroCalle: 0,
            departament: 0,
            block: 0,
            pais: '',
            region: '',
            comuna: '',
            codigoPostal: ''
          }
        res.json({ 
            respuesta: {
                datos: datos
            }
        })
    }
}

module.exports = MicroFrontController