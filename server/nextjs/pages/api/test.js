export default (req, res) => {
    if (req.method === 'POST') {
        // Process a POST request
      } else {
        res.status(200).json({ text: 'Hello' })
    }
}