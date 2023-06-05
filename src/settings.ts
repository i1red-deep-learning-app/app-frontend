function getEnvironmentVariable(variableName: string): string {
    const variableValue = process.env[variableName];
    if (variableValue === undefined) {
        throw new Error(`${variableName} is undefined`);
    }
    return variableValue;
}


export const AUTH0_DOMAIN: string = getEnvironmentVariable('REACT_APP_AUTH0_DOMAIN');
export const AUTH0_CLIENT_ID: string = getEnvironmentVariable('REACT_APP_AUTH0_CLIENT_ID');
export const AUTH0_API_AUDIENCE: string = getEnvironmentVariable('REACT_APP_AUTH0_API_AUDIENCE');
export const API_PREFIX: string = getEnvironmentVariable('REACT_APP_API_PREFIX');