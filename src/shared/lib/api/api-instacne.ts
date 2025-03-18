type Headers = Record<string, string>
type Body = (Record<string, string>)[]

type TableData = {
    headers: Headers;
    body: Body
}


const BASE_URL = "http://localhost:3000"
class HttpErrorResponse extends Error {
    constructor(public status: number, public error: string) {

        super(`${status}: ${error}`)
        this.name = "HttpErrorName";
        this.status = status
        this.error = error
        Object.setPrototypeOf(this, HttpErrorResponse.prototype);
    }
}

export const getTableData = async (query: string): Promise<TableData> => {
    const response = await fetch(`${BASE_URL}/api/cell-10-kv/${query}`)
    if (!response.ok) {
        const error = await response.json();
        console.log(error)
        throw new HttpErrorResponse(error.status, error.error)
    }
    return response.json()

}