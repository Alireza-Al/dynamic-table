import axios from "axios";


export default async function Content():Promise<Array<any>> {
    // const [loader, setLoader] = useState(false)
    try {
        let content = await axios({
            url: 'https://api.publicapis.org/entries',
            method: 'GET',
        })
        let result = content.data.entries.slice(0,10)
        return Promise.resolve(result)
    } catch (error) {
        return Promise.resolve([])
    }
}
