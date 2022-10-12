// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const { userName, pass } = req.body;
 
    if (req.method === 'POST') {
        res.status(200).json({ name: userName })
    } else {
        res.status(200).json({ name: "sanglak" })
    }

}
