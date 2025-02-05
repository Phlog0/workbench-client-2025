type Headers = Record<string, string>
type Body = (Record<string, string>)[]

type TableData = {
    headers: Headers;
    body: Body
}
export const getTableData = async (query: string): Promise<TableData> => {
    const response = await fetch(`http://localhost:3000/api/cell-10-kv/${query}`)
    const data = await response.json()
    return data
}