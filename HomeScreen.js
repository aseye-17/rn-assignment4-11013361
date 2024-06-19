import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput } from 'react-native';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000 ', location: 'Accra, Ghana', logo: require('./Images/facebook.png') },
    { id: '2', title: 'Product Manager', company: 'Google', salary: '$60,000 ', location: 'Mountain View, CA', logo: require('./Images/google.png') },
    { id: '3', title: 'UI/UX design', company: 'Yahoo', salary: '$80,000 ', location: 'Angola, Luanda', logo: require('./Images/download.png') },
    { id: '4', title: 'Hardware Engineer', company: 'Bing', salary: '$120,000', location: 'Columbia, Bogota', logo: require('./Images/download.jpeg') },
    { id: '5', title: 'System Administrator', company: 'Spotify', salary: '$170,000 ', location: 'London, England', logo: require('./Images/spotify.jpeg') },
    { id: '6', title: 'Project Manager', company: 'Netflix', salary: '$100,000 ', location: 'Paris, France', logo: require('./Images/netflix.png') },
    { id: '7', title: '', company: 'Playstore', salary: '$120,000 ', location: 'Rome, Italy', logo: require('./Images/play.jpeg') },
    { id: '8', title: 'CEO', company: 'Chrome', salary: '$190,000 ', location: 'Mexico City, Mexico', logo: require('./Images/chrome.png') },
        
  ];

  const popularJobs = [
    { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', logo: require('./Images/burgerking.png') },
    { id: '2', title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', logo: require('./Images/beats.png') },
    { id: '3', title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', logo: require('./Images/facebook.png') },
    { id: '4', title: 'Business Analyst', company: 'Youtube', salary: '$54,000/y', location: 'San Franciso, US', logo: require('./Images/youtube.jpeg') },
    { id: '5', title: 'Quality Assurance', company: 'whatsapp', salary: '$33,000/y', location: 'Phoenix, US', logo: require('./Images/whatsapp.png') },
    { id: '6', title: 'Data Scientist', company: 'tiktok', salary: '$23,000/y', location: 'Austin, US', logo: require('./Images/tiktok.png') },
    { id: '7', title: 'IT Specialist', company: 'twitter', salary: '$53,000/y', location: 'New York, US', logo: require('./Images/x.png') },
    { id: '8', title: 'Chief tecnology Officer', company: 'kfc', salary: '$12,000/y', location: 'Chicago, US', logo: require('./Images/kfc.png') },
  ];

  const renderFeaturedJob = ({ item }) => (
    <View style={styles.featuredCard}>
      <Image source={item.logo} style={styles.featuredJobLogo} />
      <View style={styles.featuredJobDetails}>
        <Text style={styles.featuredJobTitle}>{item.title}</Text>
        <Text style={styles.featuredJobCompany}>{item.company}</Text>
        <View style={styles.featuredJobSalaryLocationContainer}>
          <Text style={styles.featuredJobSalary}>{item.salary}</Text>
          <Text style={styles.featuredJobLocation}>{item.location}</Text>
        </View>
      </View>
    </View>
  );

  const renderPopularJob = ({ item }) => (
    <View style={styles.popularCard}>
      <Image source={item.logo} style={styles.popularJobLogo} />
      <Text style={styles.popularJobTitle}>{item.title}</Text>
      <Text style={styles.popularJobCompany}>{item.company}</Text>
      <Text style={styles.popularJobSalary}>{item.salary}</Text>
      <Text style={styles.popularJobLocation}>{item.location}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.userName}>Justice Darko</Text>
          <Text style={styles.userEmail}>jdarko319@st.ug.edu.gh</Text>
        </View>
        <Image source={require('./Images/Profile.png')} style={styles.userImage} />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchInnerContainer}>
          <Image source={require('./Images/search-icon.png')} style={styles.searchIcon} />
          <TextInput
            placeholder="Search a job or position"
            placeholderTextColor="#aaa"
            style={styles.searchInput}
          />
        </View>
        <Image source={require('./Images/filter.png')} style={styles.filterIcon} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <FlatList
          horizontal
          data={featuredJobs}
          renderItem={renderFeaturedJob}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <FlatList
          data={popularJobs}
          renderItem={renderPopularJob}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: '#555',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 'auto',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  searchInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#000',
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featuredCard: {
    backgroundColor: '#f0f8ff',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredJobDetails: {
    marginLeft: 10,
  },
  featuredJobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  featuredJobCompany: {
    fontSize: 14,
    color: '#555',
  },
  featuredJobSalaryLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredJobSalary: {
    fontSize: 14,
    color: '#555',
    backgroundColor: '#e7f3ff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    marginRight: 10,
  },
  featuredJobLocation: {
    fontSize: 14,
    color: '#555',
    backgroundColor: '#c8e6c9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
  popularCard: {
    backgroundColor: '#fff3e0',
    borderRadius: 8,
    padding: 20,
    marginBottom: 10,
  },
  popularJobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  popularJobCompany: {
    fontSize: 14,
    color: '#555',
  },
  popularJobSalary: {
    fontSize: 14,
    color: '#555',
  },
  popularJobLocation: {
    fontSize: 14,
    color: '#555',
  },
  featuredJobLogo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  popularJobLogo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
});

export default HomeScreen;