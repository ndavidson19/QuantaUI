<script lang="ts">
    import { Container, Stack, Grid } from '$core';
    import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '$core';
    import { Button } from '$core';
    import { Input } from '$core';
    import { Form, FormField, FormLabel, FormDescription, FormControl } from '$core';
    import { Check, ChevronsUpDown } from 'lucide-svelte';
  
    // Simple form state
    let formData = {
      username: '',
      email: '',
      password: '',
      bio: '',
      notifications: false
    };
  
    // Simple validation
    let errors: Record<string, string> = {};
    
    function validateForm() {
      errors = {};
      
      if (!formData.username) {
        errors.username = 'Username is required';
      } else if (formData.username.length < 3) {
        errors.username = 'Username must be at least 3 characters';
      }
      
      if (!formData.email) {
        errors.email = 'Email is required';
      } else if (!formData.email.includes('@')) {
        errors.email = 'Please enter a valid email';
      }
      
      if (!formData.password) {
        errors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
      }
      
      return Object.keys(errors).length === 0;
    }
  
    function handleSubmit() {
      if (validateForm()) {
        console.log('Form submitted:', formData);
        // Handle successful submission
      }
    }
  </script>
  
  <div class="min-h-screen bg-gray-50 py-12">
    <Container size="sm">
      <Stack space={{ base: 'xl' }}>
        <!-- Header -->
        <div>
          <h1 class="text-3xl font-bold">Form Components</h1>
          <p class="mt-2 text-gray-600">
            A comprehensive form system with validation and error handling
          </p>
        </div>
  
        <!-- Basic Form Example -->
        <Card>
          <CardHeader>
            <CardTitle>Sign Up Form</CardTitle>
          </CardHeader>
          <CardContent>
            <Form on:submit={handleSubmit}>
              <FormField error={errors.username}>
                <FormLabel required>Username</FormLabel>
                <FormControl>
                  <Input
                    bind:value={formData.username}
                    placeholder="Enter your username"
                    error={!!errors.username}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
              </FormField>
  
              <FormField error={errors.email}>
                <FormLabel required>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    bind:value={formData.email}
                    placeholder="Enter your email"
                    error={!!errors.email}
                  />
                </FormControl>
                <FormDescription>
                  We'll never share your email with anyone else.
                </FormDescription>
              </FormField>
  
              <FormField error={errors.password}>
                <FormLabel required>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    bind:value={formData.password}
                    placeholder="Enter your password"
                    error={!!errors.password}
                  />
                </FormControl>
                <FormDescription>
                  Must be at least 8 characters long.
                </FormDescription>
              </FormField>
  
              <FormField>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <textarea
                    bind:value={formData.bio}
                    class="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about yourself"
                  />
                </FormControl>
                <FormDescription>
                  A brief description about yourself.
                </FormDescription>
              </FormField>
  
              <div class="flex justify-end">
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </CardContent>
        </Card>
  
        <!-- Complex Form Example -->
        <Card>
          <CardHeader>
            <CardTitle>Profile Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <Form class="space-y-8">
              <!-- Profile Section -->
              <div class="space-y-4">
                <h3 class="text-lg font-medium">Profile Information</h3>
                <FormField>
                  <FormLabel>Profile Picture</FormLabel>
                  <FormControl>
                    <div class="flex items-center gap-4">
                      <div class="h-16 w-16 rounded-full bg-gray-100" />
                      <Button variant="outline">Change Photo</Button>
                    </div>
                  </FormControl>
                </FormField>
  
                <Grid cols={{ base: 1, sm: 2 }} gap="md">
                  <FormField>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" />
                    </FormControl>
                  </FormField>
  
                  <FormField>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" />
                    </FormControl>
                  </FormField>
                </Grid>
              </div>
  
              <!-- Preferences Section -->
              <div class="space-y-4">
                <h3 class="text-lg font-medium">Preferences</h3>
                <FormField>
                  <FormLabel>Language</FormLabel>
                  <FormControl>
                    <div class="relative">
                      <select
                        class="w-full appearance-none rounded-md border border-input bg-background px-3 py-2 pr-10 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                      </select>
                      <ChevronsUpDown class="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    </div>
                  </FormControl>
                </FormField>
  
                <FormField>
                  <FormLabel>Timezone</FormLabel>
                  <FormControl>
                    <div class="relative">
                      <select
                        class="w-full appearance-none rounded-md border border-input bg-background px-3 py-2 pr-10 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option>UTC-8 (Pacific Time)</option>
                        <option>UTC-5 (Eastern Time)</option>
                        <option>UTC+0 (GMT)</option>
                        <option>UTC+1 (Central European Time)</option>
                      </select>
                      <ChevronsUpDown class="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    </div>
                  </FormControl>
                </FormField>
              </div>
            </Form>
          </CardContent>
          <CardFooter class="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </Stack>
    </Container>
  </div>