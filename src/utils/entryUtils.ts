import { CLUBS } from "@/constants/ClubConstants";
import { COUNTRIES } from "@/constants/CountryConstants";

export function isValidCountry(country: string): boolean {
    return Object.values(COUNTRIES).includes(country);
}

export function isValidClub(country: string, clubName: string): boolean {
    if (!isValidCountry(country)) {
        return false;
    }
    const clubs = CLUBS[country];
    return clubs.includes(clubName);
}