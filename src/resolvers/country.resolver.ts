import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Country, NewCountryInput } from '../entities/country';

@Resolver(Country)
class CountryResolver {
  @Mutation(() => Country)
  async createCountry(@Arg('data', { validate: true }) data: NewCountryInput) {
    const country = new Country();
    Object.assign(country, data);

    await country.save();
    return country;
  }

  @Query(() => [Country])
  async getCountries() {
    return await Country.find();
  }

  @Query(() => Country)
  async getCountryByCode(@Arg('code') code: string) {
    const country = await Country.findOne({
      where: {
        code,
      },
    });

    if (!country) {
      throw new Error('Country not found');
    }

    return country;
  }

  @Query(() => [Country])
  async getCountriesByContinentCode(
    @Arg('continentCode') continentCode: string
  ) {
    return await Country.find({
      where: {
        continentCode,
      },
    });
  }
}

export default CountryResolver;
