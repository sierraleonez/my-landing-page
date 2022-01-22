import { Stylesheet } from '../../constants/type'

export const Styles: Stylesheet = {
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingRight: '10%',
    paddingLeft: '10%',
    paddingTop: 40
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    // marginBottom: 88,
  },
  navItem: {
    paddingRight: 40,
    paddingLeft: 40,
    fontFamily: 'rubik'
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textContentContainer: {
    justifyContent: 'center',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  textContent: {
    fontSize: 64,
    fontWeight: 'bold',
    marginBottom: 10
  },
  reactLogo: {
    width: 200,
    height: 200,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  commonIcon: {
    width: 35,
    height: 35,
    marginRight: 37,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  promotionalContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    boxShadow: '-1px 1px 10px #F6F6F6, -2px 2px #F6F6F6,-3px 3px #F6F6F6,-4px 20px 40px #F6F6F6,-5px 5px 10px #F6F6F6',
    borderRadius: 10,
    marginTop: 32,
  },
  promotionalItemHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 0,
    whiteSpace: 'nowrap'
  },
  promotionalItemLabel: {
    color: '#4F5665'
  },
  promotionalItemCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    borderRight: '1px solid #EEEFF2',
    borderLeft: '1px solid #EEEFF2',
    marginTop: 20,
    marginBottom: 20
  },
  textLabel: {
    fontSize: 20,
    color: '#4F5665',
    marginBottom: 48
  }
}
