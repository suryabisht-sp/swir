import useSwr from 'swr'

const baseUrl = process.env.REACT_APP_BASEURL2

export const useUrl = (path, name) => {
    if (!path) {
        throw new Error('Path is required')
         
    }

    const url = name ? baseUrl + path + '/' + name : baseUrl + path
    const { data, error } = useSwr(url)

    return { data, error }
}