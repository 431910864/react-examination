export type PlayersByIdTypes = {
    name: string | undefined,
    team: string,
    position: string,
    starred: boolean,
    id?: number,
};

export type PlayersByIdSelectTypes = {
    label: string,
    value: string,
}