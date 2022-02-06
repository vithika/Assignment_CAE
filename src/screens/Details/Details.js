import React, {useState} from 'react';
import {ScrollView, View, Text, SafeAreaView, BackHandler} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Details = ({route}) => {
  /*--------Rendering the details of the selected Crew from the List using params from List Page---------*/

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{marginTop: 25}}>
          <View style={styles.subCardView}>
            <View
              style={{
                flexDirection: 'column',
                marginTop: 15,
                marginBottom: 15,
              }}>
              <View style={{flexDirection: 'row'}}>
                {route.params.DutyCode == 'FLIGHT' && (
                  <Icon name="plane" style={styles.iconStyle} />
                )}

                <Text style={styles.heading}>
                  {' '}
                  {route.params.DutyCode} Details
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                {route.params.FlightName != '' && (
                  <Text style={styles.flightName}>Flight Name :</Text>
                )}
                {route.params.FlightName != '' && (
                  <Text style={styles.Flightname}>
                    {' '}
                    {route.params.FlightName}
                  </Text>
                )}
              </View>
              <View style={{flexDirection: 'row'}}>
                {route.params.Tail != '' && (
                  <Text style={styles.tail}>Tail:</Text>
                )}
                {route.params.Tail != '' && (
                  <Text style={styles.Flightname}> {route.params.Tail}</Text>
                )}
              </View>
              <View style={{flexDirection: 'row'}}>
                {route.params.AircraftType != '' && (
                  <Text style={styles.aircraftType}> AircraftType:</Text>
                )}
                {route.params.DutyCode == 'FLIGHT' &&
                  route.params.AircraftType != '' && (
                    <Text style={styles.Flightname}>
                      {' '}
                      {route.params.AircraftType}
                    </Text>
                  )}
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.flightdate}> Flight Date:</Text>

                <Text style={styles.Date}>{route.params.Date}</Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text style={styles.details}> {route.params.TimeArrival}</Text>
                {route.params.Arrival != route.params.Departure && (
                  <Text style={styles.details}> {route.params.Arrival}</Text>
                )}
              </View>
              {route.params.TimeArrival != '' && (
                <Text style={styles.subtitle}>ARRIVAL</Text>
              )}
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.details}>
                  {' '}
                  {route.params.TimeDeparture}
                </Text>
                <Text style={styles.details}> {route.params.Departure}</Text>
              </View>

              {route.params.TimeDeparture != '' && (
                <Text style={styles.subtitle}>DEPART</Text>
              )}
            </View>
            <View>
              {route.params.DutyCode == 'FLIGHT' && (
                <Text> No of Stops: 1</Text>
              )}
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
                {route.params.DutyCode == 'FLIGHT' &&
                  route.params.Captain != '' && (
                    <Text style={styles.heading}>More Information</Text>
                  )}
              </View>
              <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flexDirection: 'row'}}>
                    {route.params.Captain != '' && (
                      <Text style={styles.captain_officer}> Captain </Text>
                    )}
                    {route.params.Captain != '' && (
                      <Text style={styles.moreinfo}>
                        {route.params.Captain}
                      </Text>
                    )}
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  {route.params.FirstOfficer != '' && (
                    <Text style={styles.captain_officer}> First Officer</Text>
                  )}
                  {route.params.FirstOfficer != '' && (
                    <Text style={styles.moreinfo}>
                      {' '}
                      {route.params.FirstOfficer}
                    </Text>
                  )}
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                {route.params.FlightAttendant != '' && (
                  <Text style={styles.flightAttendant}> Flight Attendant </Text>
                )}
                {route.params.FlightAttendant != '' && (
                  <Text style={styles.moreinfo}>
                    {route.params.FlightAttendant}
                  </Text>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
