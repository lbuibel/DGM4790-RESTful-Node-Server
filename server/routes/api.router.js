import { Router } from 'express'
import { postAddAlbum, getAllAlbums } from '../controllers/api.controller'

export const apiRouter = Router()

// /api/add-product
apiRouter.post('/add-album', postAddAlbum)

apiRouter.get('/getAllAlbums', getAllAlbums)