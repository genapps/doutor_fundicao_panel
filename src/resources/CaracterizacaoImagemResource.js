import AdminJS from "adminjs";
import * as path from 'path';
import uploadFeature from "@adminjs/upload";
import CaracterizacaoImagem from "../models/caracterizacaoImagem";

export default {
    resource: CaracterizacaoImagem,
    options: {
        parent:{
            icon: "Image",
        },

        properties: {
            id: {
              position: 1,
            },
            createAt:{
                position: 10,
                isVisible: { list: false, filter: false, show: true, edit: false},

            },
            updatedAt: {
                position: 11,
                isVisible: { list: false, filter: true, show: true, edit: false},
             }, 
             attachment:{
                position: 12,
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