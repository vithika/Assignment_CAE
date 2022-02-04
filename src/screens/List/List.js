import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  SectionList,
  RefreshControl,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const List = ({navigation}) => {

  const [crewData, setcrewData] = useState([]);
  const [refreshing, setRefreshing] = useState(true);

 /*-------------------------- Calling Fetch data from  API on PageLoad  -----------------------------*/
 
 
 useEffect(() => {
    fetchdatafromJSON();
  }, []);

  
  /*-------------------------- Function to Fetch Data from JSON using Fetch --------------------------*/
  
  
  
  const fetchdatafromJSON = () => {
    fetch('https://rosterbuster.aero/wp-content/uploads/dummy-response.json')
      .then(response => response.json())
      .then(json => setcrewData(json))
      .catch(error => console.error(error))
      .finally(() => setRefreshing(false));
  };


/*------------------------------Function to Create Filtered Data by Date and return Data ----------------------------------*/
 


const CrewData = Object.values(
    crewData.reduce((crew, item) => {
      if (!crew[item.Date])
        crew[item.Date] = {
          title: item.Date,
          data: [],
        };
      crew[item.Date].data.push(item);
      return crew;
    }, {}),
  );



/*------------------------Function to Refresh List if Data changes------------------------*/
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchdatafromJSON();
    
  }, []);

  /*---------------------Navigating and Passing Crew Data from List Page To Details Page ------------*/

  const _onPress = item => {
    var Date = item.Date;
    var ms = Date.replace(Date.substring(3, 5), Date.substring(0, 2));
    var mydate = ms.replace(ms.substring(0, 2), Date.substring(3, 5));
    var journeydate = moment(mydate).format('DD MMMM,YYYY');

    navigation.navigate('Details', {
      FlightName: item.Flightnr,
      TimeArrival: item.Time_Arrive,
      TimeDeparture: item.Time_Depart,
      Departure: item.Departure,
      Arrival: item.Destination,
      Date: journeydate,
      Captain: item.Captain,
      FirstOfficer: item['First Officer'],
      FlightAttendant: item['Flight Attendant'],
      AircraftType: item['Aircraft Type'],
      DutyCode: item.DutyCode,
      Tail: item.Tail,
    });
  };

  /*----------------------Rendering Section List with List of Crew Data----------------*/
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => _onPress(item)}>
      <View style={styles.itemStyle}>
        <View style={{flex: 2, flexDirection: 'row', marginLeft: 20}}>
          {item.DutyCode == 'FLIGHT' && (
            <Icon name="plane" style={styles.iconStyle} />
          )}
          {item.DutyCode == 'OFF' && (
            <Icon name="square" style={styles.iconStyle} />
          )}
          {item.DutyCode == 'Standby' && (
            <Icon name="clipboard" style={styles.iconStyle} />
          )}
          {item.DutyCode == 'POSITIONING' && (
            <Icon name="stop-circle-o" style={styles.iconStyle} />
          )}
          {item.DutyCode == 'LAYOVER' && (
            <Icon name="suitcase" style={styles.iconStyle} />
          )}
          {item.DutyCode == 'Standby' && (
            <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={styles.LayOver}>{item.DutyCode}</Text>
              <Text style={styles.destination_LayOver}>
                {item.DutyID}({item.Destination})
              </Text>
            </View>
          )}

          {item.DutyCode != 'LAYOVER' &&
            item.DutyCode != 'Standby' &&
            item.DutyCode != 'OFF' && (
              <Text style={styles.destination}>
                {item.Departure} - {item.Destination}
              </Text>
            )}

          {item.DutyCode == 'OFF' && (
            <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={styles.LayOver}>{item.DutyCode}</Text>
              <Text style={styles.destination_LayOver}>{item.Destination}</Text>
            </View>
          )}
          {item.DutyCode == 'LAYOVER' && (
            <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={styles.LayOver}>{item.DutyCode}</Text>
              <Text style={styles.destination_LayOver}>{item.Destination}</Text>
            </View>
          )}
        </View>
        <View style={{flexDirection: 'column'}}>
          {item.DutyCode == 'Standby' && (
            <Text style={{color: 'grey', marginTop: 10}}> Match Crew</Text>
          )}
          {item.DutyCode == 'Standby' && (
            <Text style={styles.standbytime}>
              {item.Time_Depart} - {item.Time_Arrive}
            </Text>
          )}
          {item.DutyCode != 'Standby' && (
            <Text style={styles.time}>
              {item.Time_Depart} - {item.Time_Arrive}
            </Text>
          )}
        </View>
      </View>
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#C0C0C0',
        }}
      />
    </TouchableOpacity>
  );

  /*------------------------------Rendering Section List ---------------------------*/
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroll}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {refreshing ? <Text style={{ textAlign: "center", fontSize: 20, color:'black' }}>Loading...</Text> :
        <SectionList
          sections={CrewData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          renderSectionHeader={renderHeader}
        />
      }
      </ScrollView>
    </SafeAreaView>
  );
};
/*--------------------------Rendering Header with  Formatted Date-----------------------*/
renderHeader = ({section}) => {
  var title_date = section.title.replace(
    section.title.substring(3, 5),
    section.title.substring(0, 2),
  );
  var date_title = title_date.replace(title_date.substring(0, 2), section.title.substring(3, 5));


  return (
    <View style={styles.headerStyle}>
      <Text style={styles.itemDate}>
        {moment(date_title)
          .format('DD MMM. YYYY')
          .toLocaleLowerCase()}        
      </Text>
    </View>
  );
};

export default List;
