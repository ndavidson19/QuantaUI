<script lang="ts">
    import { Container, Grid, Flex, Stack } from '$core';
    import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '$core';
    import { cn } from '$utils/cn';

    import { Button } from '$core';
    import { Avatar } from '$core';
    import { Badge } from '$core';
    import { Input } from '$core';
    import { 
      Search, 
      Bell, 
      Mail, 
      Settings, 
      Home,
      Users,
      Calendar,
      BarChart,
      FileText,
      MessagesSquare,
      ShoppingCart,
      Star
    } from 'lucide-svelte';

    // Navigation Items
    const navigationItems = [
      { icon: Home, label: 'Dashboard' },
      { icon: Users, label: 'Team' },
      { icon: Calendar, label: 'Calendar' },
      { icon: FileText, label: 'Documents' },
      { icon: BarChart, label: 'Reports' },
    ];

    // Team Members
    const teamMembers = [
      { name: 'Alex Thompson', role: 'Product Designer', status: 'online' },
      { name: 'Sarah Chen', role: 'Developer', status: 'offline' },
      { name: 'Michael Ross', role: 'Marketing', status: 'online' },
      { name: 'Emily Parker', role: 'UX Research', status: 'away' },
    ];

    // Products/Pricing Plans
    const products = [
      { 
        name: 'Pro Plan', 
        price: '$99/mo', 
        features: ['All features', 'Priority support', 'API access'] 
      },
      { 
        name: 'Team Plan', 
        price: '$199/mo', 
        features: ['Enterprise features', '24/7 support', 'Custom integrations'] 
      },
      { 
        name: 'Basic Plan', 
        price: '$29/mo', 
        features: ['Core features', 'Email support', 'Basic analytics'] 
      },
    ];

    // Quick Stats
    const quickStats = [
      { label: 'Total Users', value: '12.5k', growth: '+12%' },
      { label: 'Revenue', value: '$45.2k', growth: '+8%' },
      { label: 'Active Projects', value: '24', growth: '+5%' },
      { label: 'Pending Tasks', value: '58', growth: '-3%' },
    ];

    // Recent Activities
    const recentActivities = [
      { user: 'John Doe', action: 'Created a new project', time: '1 hour ago' },
      { user: 'Jane Smith', action: 'Updated settings', time: '3 hours ago' },
      { user: 'Mark Johnson', action: 'Commented on a task', time: '5 hours ago' },
      { user: 'Lucy Brown', action: 'Joined the team', time: '1 day ago' },
      { user: 'Tom Wilson', action: 'Completed a milestone', time: '2 days ago' },
    ];

    // Notifications
    const notifications = [
      { icon: Bell, message: 'New comment on your post', time: '10 minutes ago' },
      { icon: Mail, message: 'You have a new message', time: '30 minutes ago' },
      { icon: ShoppingCart, message: 'Order #1234 has been shipped', time: '2 hours ago' },
      { icon: Settings, message: 'Your password was changed', time: '1 day ago' },
      { icon: Calendar, message: 'Meeting with the team', time: '3 days ago' },
    ];

    // User Profile
    const userProfile = {
      name: 'Amanda Clark',
      email: 'amanda.clark@example.com',
      role: 'Administrator',
      bio: 'Passionate about building user-centric applications and leading dynamic teams.',
    };
</script>

<div class="min-h-screen bg-gray-50">
  <!-- Main Navigation -->
  <header class="bg-white border-b sticky top-0 z-50">
    <Container maxWidth="full" class="py-4">
      <Flex justify="between" align="center" gap="md">
        <Flex align="center" gap="md">
          <span class="text-xl font-bold text-indigo-600">Quanta UI</span>
          <div class="hidden md:flex gap-6 ml-8">
            {#each navigationItems as item}
              <a 
                href="#" 
                class="text-gray-600 hover:text-gray-900 flex items-center gap-2"
              >
                <svelte:component this={item.icon} class="w-4 h-4" />
                {item.label}
              </a>
            {/each}
          </div>
        </Flex>
        
        <Flex gap="md" align="center">
          <div class="relative hidden md:flex items-center">
            <Search class="w-4 h-4 absolute left-3 text-gray-400" />
            <Input 
              type="search" 
              placeholder="Search..." 
              class="pl-9 w-64"
            />
          </div>
          <Flex gap="sm">
            <Button variant="ghost" size="icon">
              <Bell class="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail class="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings class="w-4 h-4" />
            </Button>
          </Flex>
          <Flex class="relative">
            <Avatar class="w-8 h-8 cursor-pointer" />
            <!-- User Dropdown -->
            <div class="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg hidden group-hover:block">
              <Stack space={{ base: 'sm' }}>
                <a href="#" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <span class="w-4 h-4 mr-2"><Bell class="w-4 h-4" /></span>
                  Notifications
                </a>
                <a href="#" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <span class="w-4 h-4 mr-2"><Mail class="w-4 h-4" /></span>
                  Messages
                </a>
                <a href="#" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <span class="w-4 h-4 mr-2"><Settings class="w-4 h-4" /></span>
                  Settings
                </a>
                <a href="#" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <span class="w-4 h-4 mr-2"><Home class="w-4 h-4" /></span>
                  Logout
                </a>
              </Stack>
            </div>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  </header>

  <Container maxWidth="full" class="py-8">
    <Grid cols={{ base: 1, lg: 12 }} gap="lg">
      <!-- Sidebar -->
      <div class="lg:col-span-3 xl:col-span-2">
        <Stack space={{ base: 'lg' }}>
          <!-- Quick Stats -->
          <Grid cols={{ base: 2, lg: 1 }} gap="md">
            {#each quickStats as stat}
              <Card>
                <CardContent class="pt-6">
                  <Stack space={{ base: 'sm' }}>
                    <p class="text-sm text-gray-500">{stat.label}</p>
                    <Flex justify="between" align="baseline">
                      <span class="text-2xl font-semibold">{stat.value}</span>
                      <Badge 
                        variant="outline" 
                        class={cn(
                          stat.growth.startsWith('+') ? 'text-emerald-600 bg-emerald-50' : 'text-red-600 bg-red-50'
                        )}
                      >
                        {stat.growth}
                      </Badge>
                    </Flex>
                  </Stack>
                </CardContent>
              </Card>
            {/each}
          </Grid>

          <!-- Team Section -->
          <Card>
            <CardHeader>
              <CardTitle class="text-lg">Team Members</CardTitle>
            </CardHeader>
            <CardContent>
              <Stack space={{ base: 'md' }}>
                {#each teamMembers as member}
                  <Flex justify="between" align="center">
                    <Flex gap="sm" align="center">
                      <Avatar class="w-8 h-8" />
                      <div>
                        <p class="text-sm font-medium">{member.name}</p>
                        <p class="text-xs text-gray-500">{member.role}</p>
                      </div>
                    </Flex>
                    <div 
                      class={cn(
                        'w-2 h-2 rounded-full',
                        member.status === 'online' && 'bg-green-400',
                        member.status === 'offline' && 'bg-gray-300',
                        member.status === 'away' && 'bg-yellow-400'
                      )}
                    />
                  </Flex>
                {/each}
              </Stack>
            </CardContent>
            <CardFooter>
              <Button variant="link" size="sm" class="w-full text-center">
                View All Team
              </Button>
            </CardFooter>
          </Card>

          <!-- Notifications -->
          <Card>
            <CardHeader>
              <CardTitle class="text-lg">Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <Stack space={{ base: 'sm' }}>
                {#each notifications as notification}
                  <Flex gap="sm" align="start">
                    <svelte:component this={notification.icon} class="w-5 h-5 text-indigo-600 mt-1" />
                    <div>
                      <p class="text-sm">{notification.message}</p>
                      <p class="text-xs text-gray-500">{notification.time}</p>
                    </div>
                  </Flex>
                {/each}
              </Stack>
            </CardContent>
            <CardFooter>
              <Button variant="link" size="sm" class="w-full text-center">
                View All Notifications
              </Button>
            </CardFooter>
          </Card>

          <!-- Recent Activities -->
          <Card>
            <CardHeader>
              <CardTitle class="text-lg">Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <Stack space={{ base: 'sm' }}>
                {#each recentActivities as activity}
                  <Flex gap="sm" align="center">
                    <Avatar class="w-8 h-8" />
                    <div>
                      <p class="text-sm"><span class="font-medium">{activity.user}</span> {activity.action}</p>
                      <p class="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </Flex>
                {/each}
              </Stack>
            </CardContent>
            <CardFooter>
              <Button variant="link" size="sm" class="w-full text-center">
                View All Activities
              </Button>
            </CardFooter>
          </Card>
        </Stack>
      </div>

      <!-- Main Content -->
      <div class="lg:col-span-9 xl:col-span-10">
        <Stack space={{ base: 'xl' }}>
          <!-- Feature Showcase -->
          <section>
            <h2 class="text-2xl font-semibold mb-6">Layout Components</h2>
            <Grid cols={{ base: 1, md: 2, xl: 3 }} gap="lg">
              {#each [
                { 
                  icon: ShoppingCart,
                  title: 'Container',
                  description: 'Centered, responsive containers with configurable max-widths and padding'
                },
                { 
                  icon: MessagesSquare,
                  title: 'Grid',
                  description: 'Powerful grid system with responsive columns and gap controls'
                },
                { 
                  icon: Star,
                  title: 'Flex',
                  description: 'Flexible layouts with responsive direction, alignment, and spacing'
                },
                { 
                  icon: Mail,
                  title: 'Buttons',
                  description: 'Variety of button styles including ghost, outline, and default variants'
                },
                { 
                  icon: Bell,
                  title: 'Avatars',
                  description: 'Customizable avatars with status indicators and various sizes'
                },
                { 
                  icon: Settings,
                  title: 'Badges',
                  description: 'Informative badges to display statuses, counts, and labels'
                },
                { 
                  icon: FileText,
                  title: 'Inputs',
                  description: 'Accessible and customizable input fields for forms and search bars'
                },
                { 
                  icon: Users,
                  title: 'Cards',
                  description: 'Structured cards with headers, content, and footers for organized layouts'
                },
              ] as feature}
                <Card class="relative overflow-hidden">
                  <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-50 rounded-full" />
                  <CardHeader>
                    <Flex gap="md" align="center">
                      <div class="p-2 bg-indigo-50 rounded-lg">
                        <svelte:component this={feature.icon} class="w-5 h-5 text-indigo-600" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </Flex>
                  </CardHeader>
                  <CardContent>
                    <p class="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              {/each}
            </Grid>
          </section>

          <!-- Pricing Cards -->
          <section>
            <h2 class="text-2xl font-semibold mb-6">Pricing Plans</h2>
            <Grid cols={{ base: 1, md: 3 }} gap="lg">
              {#each products as product}
                <Card>
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <p class="text-2xl font-bold text-indigo-600 mt-2">
                      {product.price}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Stack space={{ base: 'sm' }}>
                      {#each product.features as feature}
                        <Flex gap="sm" align="center">
                          <div class="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center">
                            <Star class="w-3 h-3 text-indigo-600" />
                          </div>
                          <span class="text-gray-600">{feature}</span>
                        </Flex>
                      {/each}
                    </Stack>
                  </CardContent>
                  <CardFooter>
                    <Button class="w-full" variant="outline">
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              {/each}
            </Grid>
          </section>

          <!-- Dashboard Grid -->
          <section>
            <h2 class="text-2xl font-semibold mb-6">Dashboard Layout</h2>
            <Grid cols={{ base: 1, md: 2, xl: 3 }} gap="md">
              <!-- Performance Overview -->
              <Card class="md:col-span-2 xl:col-span-3">
                <CardHeader>
                  <Flex justify="between" align="center">
                    <CardTitle>Performance Overview</CardTitle>
                    <Button variant="outline" size="sm">Download Report</Button>
                  </Flex>
                </CardHeader>
                <CardContent>
                  <div class="h-[200px] bg-gray-50 rounded-lg border flex items-center justify-center">
                    Chart Placeholder
                  </div>
                </CardContent>
              </Card>

              <!-- Activity Feed -->
              <Card>
                <CardHeader>
                  <CardTitle>Activity Feed</CardTitle>
                </CardHeader>
                <CardContent>
                  <Stack space={{ base: 'md' }}>
                    {#each Array(3) as _}
                      <Flex gap="sm" align="start">
                        <Avatar class="w-8 h-8" />
                        <div>
                          <p class="text-sm"><span class="font-medium">John Doe</span> completed a task</p>
                          <p class="text-xs text-gray-500">2 hours ago</p>
                        </div>
                      </Flex>
                    {/each}
                  </Stack>
                </CardContent>
              </Card>

              <!-- Recent Messages -->
              <Card>
                <CardHeader>
                  <CardTitle>Recent Messages</CardTitle>
                </CardHeader>
                <CardContent>
                  <Stack space={{ base: 'md' }}>
                    {#each Array(3) as _}
                      <Flex gap="sm" align="start">
                        <Avatar class="w-8 h-8" />
                        <div>
                          <p class="text-sm"><span class="font-medium">Jane Smith</span> sent you a message</p>
                          <p class="text-xs text-gray-500">1 hour ago</p>
                        </div>
                      </Flex>
                    {/each}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </section>

          <!-- User Profile -->
          <section>
            <h2 class="text-2xl font-semibold mb-6">User Profile</h2>
            <Grid cols={{ base: 1, md: 2 }} gap="lg">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <Flex direction="col" gap="sm" class="items-center">
                    <Avatar class="w-16 h-16" />
                    <p class="text-lg font-semibold">{userProfile.name}</p>
                    <p class="text-sm text-gray-500">{userProfile.email}</p>
                    <p class="text-xs text-gray-400">{userProfile.role}</p>
                  </Flex>
                  <div class="mt-4">
                    <p class="text-sm text-gray-600">{userProfile.bio}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" class="w-full">
                    Edit Profile
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <Stack space={{ base: 'sm' }}>
                    <Flex justify="between" align="center">
                      <span>Change Password</span>
                      <Button variant="ghost" size="icon">
                        <Settings class="w-4 h-4" />
                      </Button>
                    </Flex>
                    <Flex justify="between" align="center">
                      <span>Two-Factor Authentication</span>
                      <Button variant="ghost" size="icon">
                        <Settings class="w-4 h-4" />
                      </Button>
                    </Flex>
                  </Stack>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" class="w-full">
                    Update Settings
                  </Button>
                </CardFooter>
              </Card>
            </Grid>
          </section>

          <!-- Forms -->
          <section>
            <h2 class="text-2xl font-semibold mb-6">Forms</h2>
            <Grid cols={{ base: 1, md: 2 }} gap="lg">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <Stack space={{ base: 'sm' }}>
                    <Input type="text" placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                    <Input type="textarea" placeholder="Your Message" class="h-24" />
                  </Stack>
                </CardContent>
                <CardFooter>
                  <Button variant="default" class="w-full">
                    Send Message
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Subscribe</CardTitle>
                </CardHeader>
                <CardContent>
                  <Stack space={{ base: 'sm' }}>
                    <Input type="email" placeholder="Enter your email" />
                  </Stack>
                </CardContent>
                <CardFooter>
                  <Button variant="default" class="w-full">
                    Subscribe
                  </Button>
                </CardFooter>
              </Card>
            </Grid>
          </section>

          <!-- Tables -->
          <section>
            <h2 class="text-2xl font-semibold mb-6">Data Tables</h2>
            <Card>
              <CardHeader>
                <CardTitle>User Data</CardTitle>
              </CardHeader>
              <CardContent>
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    {#each teamMembers as member}
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <Flex align="center" gap="sm">
                            <Avatar class="w-6 h-6" />
                            <span class="text-sm font-medium text-gray-900">{member.name}</span>
                          </Flex>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span class="text-sm text-gray-500">{member.role}</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <Badge variant="outline" class={
                            member.status === 'online' ? 'text-green-600 bg-green-50' :
                            member.status === 'offline' ? 'text-gray-600 bg-gray-50' :
                            'text-yellow-600 bg-yellow-50'
                          }>
                            {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                          </Badge>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <Flex gap="sm">
                            <Button variant="ghost" size="icon">
                              <Star class="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Settings class="w-4 h-4" />
                            </Button>
                          </Flex>
                        </td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </CardContent>
              <CardFooter>
                <Button variant="link" class="w-full text-center">
                  View All Users
                </Button>
              </CardFooter>
            </Card>
          </section>

          <!-- Charts -->
          <section>
            <h2 class="text-2xl font-semibold mb-6">Analytics</h2>
            <Grid cols={{ base: 1, md: 2 }} gap="lg">
              <!-- Sales Chart -->
              <Card>
                <CardHeader>
                  <CardTitle>Sales Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div class="h-[200px] bg-gray-50 rounded-lg border flex items-center justify-center">
                    Sales Chart Placeholder
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" class="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>

              <!-- User Growth Chart -->
              <Card>
                <CardHeader>
                  <CardTitle>User Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div class="h-[200px] bg-gray-50 rounded-lg border flex items-center justify-center">
                    User Growth Chart Placeholder
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" class="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </Grid>
          </section>

          <!-- Additional Tables -->
          <section>
            <h2 class="text-2xl font-semibold mb-6">Project Data</h2>
            <Card>
              <CardHeader>
                <CardTitle>Active Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Name</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    {#each Array(5) as _}
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span class="text-sm text-gray-900">Project Alpha</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <Badge variant="outline" class="text-blue-600 bg-blue-50">
                            In Progress
                          </Badge>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span class="text-sm text-gray-500">Dec 31, 2024</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <Flex gap="sm">
                            <Button variant="ghost" size="icon">
                              <Star class="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Settings class="w-4 h-4" />
                            </Button>
                          </Flex>
                        </td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </CardContent>
              <CardFooter>
                <Button variant="link" class="w-full text-center">
                  View All Projects
                </Button>
              </CardFooter>
            </Card>
          </section>
        </Stack>
      </div>
    </Grid>
  </Container>

  <!-- Footer -->
  <footer class="bg-white border-t">
    <Container maxWidth="full" class="py-4">
      <Flex justify="center" align="center" class="text-gray-600">
        &copy; {new Date().getFullYear()} Quanta UI. All rights reserved.
      </Flex>
    </Container>
  </footer>
</div>

<style>
    /* Optional: Add any additional styling here */
    .group:hover .group-hover\:block {
        display: block;
    }
</style>
