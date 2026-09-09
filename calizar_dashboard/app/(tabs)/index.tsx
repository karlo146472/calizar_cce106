import MetricCard from '@/components/metric-card';
import QuickAction from '@/components/ui/quick-action';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const rem = (value: number) => value * 16;
const {width} = Dimensions.get('window');
const baseWidth = 375;

export const scale = (size:number) => (width / baseWidth) * size;


export default function HomeScreen() {
  return (
    <View style={{flex:1, backgroundColor:'black'}}>
          <SafeAreaView style={{flex:1}}>
            <ScrollView style={{flex:1, backgroundColor:'#FBEFEF'}}>

            <View style={styles.mainContainer}>
              <View>
                  <Text style={styles.headTitle}>Penny</Text>
                  <Text style={styles.subTitle}>
                    Track your daily spending, organize your expenses, and stay aware of where your money goes—all in one simple mobile app.
                  </Text>
              </View>
              <View>
                  <MetricCard title='Income' value='P5,000' description = 'This month' color=''/>
                  <MetricCard title='Revenue' value='P2,700' description = 'This month' color='#F5CBCB'/>
                  <MetricCard title='Expense' value='P700' description = 'This month' color='#E2B4BD'/>
              </View>
             
              <View style={styles.quickActionSection}>
                <Text style={styles.sectionTitle}>Quick Actions</Text>


                      <View style={styles.actionRow}>
                        <QuickAction
                          title="+ Add Expense"
                          onPress={() => console.log('Add Expense')}
                        />

                        <QuickAction
                          title="+ Add Income"
                          onPress={() => console.log('Add Income')}
                        />

                        <QuickAction
                          title="View Expenses"
                          onPress={() => console.log('View Expenses')}
                        />
                      </View>

              </View>
            </View>

            </ScrollView>
          </SafeAreaView>
  </View>  
  );
}



const styles = StyleSheet.create({
            mainContainer:{
                marginHorizontal: scale(25),
                marginTop: scale(30)
            },
            headTitle:{
               fontSize:rem(2.8),
               fontWeight:'bold',
               color:'#292C33'
            },
            subTitle:{
              color:'#292C33',
              marginVertical:5
            },
            titleCon:{
              
            }
            ,
            contentCon:{
                flex:1,
                justifyContent:'center',
                alignItems:'stretch'
            },

            quickActionSection: {
              marginTop: 20,
            },

            quickActionButtons:{
              flex:1,
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center'
            },

            sectionTitle: {
              fontSize: rem(1.3),
              fontWeight: 'bold',
              color: '#292C33',
              marginBottom: 12,
            },

            actionRow: {
              flex:1,
              justifyContent:'center',
              alignItems:'center',
              flexDirection: 'column',
              gap: 10,
              marginBottom: 10,
            },
});
