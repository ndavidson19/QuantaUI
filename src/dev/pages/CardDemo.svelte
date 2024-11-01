<script lang="ts">
    import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '$core';
    import { Button } from '$core';
  </script>
  
  <div class="space-y-8">
    <!-- Header -->
    <div class="border-b border-gray-200 pb-5">
      <h1 class="text-3xl font-bold text-gray-900">Card</h1>
      <p class="mt-2 text-sm text-gray-500">
        Versatile container components for organizing content and maintaining visual hierarchy.
      </p>
    </div>
  
    <!-- Basic Examples -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold text-gray-900">Basic Usage</h2>
      <div class="grid gap-6 md:grid-cols-2">
        <!-- Simple Card -->
        <Card>
          <CardHeader>
            <CardTitle>Basic Card</CardTitle>
            <CardDescription>A simple card with title and description</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-gray-600 dark:text-gray-300">
              This is a basic card that demonstrates the minimal usage of the Card component.
            </p>
          </CardContent>
        </Card>
  
        <!-- Card with Footer -->
        <Card>
          <CardHeader>
            <CardTitle>With Footer</CardTitle>
            <CardDescription>Card including action buttons in footer</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-gray-600 dark:text-gray-300">
              This card includes a footer section with action buttons.
            </p>
          </CardContent>
          <CardFooter class="gap-2">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  
    <!-- Variants -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold text-gray-900">Variants</h2>
      <div class="grid gap-6 md:grid-cols-3">
        <!-- Default Variant -->
        <Card>
          <CardHeader>
            <CardTitle>Default</CardTitle>
            <CardDescription>With shadow elevation</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-gray-600 dark:text-gray-300">Default card variant with shadow.</p>
          </CardContent>
        </Card>
  
        <!-- Bordered Variant -->
        <Card variant="bordered">
          <CardHeader>
            <CardTitle>Bordered</CardTitle>
            <CardDescription>With border outline</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-gray-600 dark:text-gray-300">Bordered variant without shadow.</p>
          </CardContent>
        </Card>
  
        <!-- Ghost Variant -->
        <Card variant="ghost">
          <CardHeader>
            <CardTitle>Ghost</CardTitle>
            <CardDescription>Transparent background</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-gray-600 dark:text-gray-300">Ghost variant without background.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  
    <!-- Sizes -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold text-gray-900">Sizes</h2>
      <div class="grid gap-6 md:grid-cols-3">
        <!-- Small Size -->
        <Card size="sm">
          <CardHeader>
            <CardTitle>Small</CardTitle>
            <CardDescription>Compact padding</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-gray-600 dark:text-gray-300">Card with small padding.</p>
          </CardContent>
        </Card>
  
        <!-- Medium Size -->
        <Card size="md">
          <CardHeader>
            <CardTitle>Medium</CardTitle>
            <CardDescription>Default padding</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-gray-600 dark:text-gray-300">Card with medium padding.</p>
          </CardContent>
        </Card>
  
        <!-- Large Size -->
        <Card size="lg">
          <CardHeader>
            <CardTitle>Large</CardTitle>
            <CardDescription>Spacious padding</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-gray-600 dark:text-gray-300">Card with large padding.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  
    <!-- Complex Example -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold text-gray-900">Complex Example</h2>
      <Card>
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
          <CardDescription>Current project status and metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div class="grid gap-4 md:grid-cols-3">
              <div class="space-y-2">
                <p class="text-sm font-medium text-gray-500">Total Tasks</p>
                <p class="text-2xl font-bold">128</p>
              </div>
              <div class="space-y-2">
                <p class="text-sm font-medium text-gray-500">In Progress</p>
                <p class="text-2xl font-bold">28</p>
              </div>
              <div class="space-y-2">
                <p class="text-sm font-medium text-gray-500">Completed</p>
                <p class="text-2xl font-bold">84</p>
              </div>
            </div>
            <div class="pt-4 border-t">
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Project is currently on track with 65% completion rate. Team velocity has increased by 12% in the last sprint.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter class="gap-2">
          <Button variant="outline">View Details</Button>
          <Button>Generate Report</Button>
        </CardFooter>
      </Card>
    </section>
  </div>