import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Sample Image',
      url: 'https://picsum.photos/600/400',
      createdAt: new Date(),
    },
  ])
})

export default router
