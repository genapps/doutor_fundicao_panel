import AdminJS from "adminjs";
import * as path from 'path';
import uploadFeature from "@adminjs/upload";
import PatrocionadorImagem from "../models/patrocinadorImagem";


export default {
    resource: PatrocionadorImagem,
    options: {
        parent:{
            icon: "Image",
        },

        properties: {
            id: {
              position: 1,
            },
            
            createAt:{
                position: 2,
                isVisible: { list: false, filter: false, show: true, edit: false},

            },
            updatedAt: {
                position: 3,
                isVisible: { list: false, filter: true, show: true, edit: false},
             }, 
             attachment:{
                position: 4,
             },
             name: {
                position: 5,
                isRequired: true,
            },         
            path:{
                isVisible: false,
            },
            folder: {
                isVisible: false,
            },
            type:{
                isVisible: false,
            },
            filename: {
                isVisible: false,
            },
            size: {isVisible: false,
            }, 
         },
    },
    features: [
        uploadFeature({
            provider: {
              local: {
                bucket: path.join(__dirname, "../../uploads"),
              }
            },
        properties: {
            key: 'path',
            bucket: 'folder',
            mimeType: 'type',
            size:      'size',
            filename: 'filename',
            file: 'attachment',
        },
        validation: {
            mimeTypes: [ "image/png","application/pdf", "application/zip"],
            maxSize: 5 * 1024 * 1024,
        },
        }),
    ],
};