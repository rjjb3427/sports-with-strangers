# Component Hierarchy

**HomeContainer**
 - Home

 **AuthFormContainer**
 - AuthForm

 **NavBarContainer**
 - NavBar

 **DashboardContainer**
 - UserShowContainer
  + UserShow
 - Dashboard
  + EventListContainer
   + EventList
   + EventListItem

 **HostFormContainer**
 - HostForm

**CityContainer**
  - City
 - EventListContainer
  + EventList
    + EventListItem

**CityListContainer**
  - CityList
    + CityListItem

**EventListContainer**
 - EventList
  + EventListItem

**EventShow**
  - EventDetail
 - UserShowContainer
  + UserShow
- EventListContainer
    + EventList
    + EventListItem

## Routes

|Path   | Component   |
|-------|-------------|
| "/signup" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/cities" | "CityListContainer" |
| "/cities/:cityId" | "EventListContainer" |
| "/cities/:cityId/:eventId" | "EventShow" |
| "/dashboard" | "DashboardContainer"
| "/new-event" | "HostFormContainer" |
