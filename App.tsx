import { Button } from './components/Button';
import { Card, CardHeader, CardContent, CardFooter } from './components/Card';
import { Input } from './components/Input';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--wonder-gray-50)] p-[var(--spacing-3xl)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-[var(--spacing-4xl)]">
          <h1 className="text-[var(--wonder-orange-500)] mb-[var(--spacing-s)]">
            Wondermore Design System
          </h1>
          <p className="text-[var(--wonder-gray-600)]">
            A showcase of components built with Wondermore brand tokens
          </p>
        </div>

        {/* Buttons Section */}
        <section className="mb-[var(--spacing-4xl)]">
          <h2 className="text-[var(--wonder-gray-900)] mb-[var(--spacing-2xl)]">
            Buttons
          </h2>
          
          <div className="space-y-[var(--spacing-2xl)]">
            {/* Button Variants */}
            <div>
              <h5 className="text-[var(--wonder-gray-700)] mb-[var(--spacing-l)]">Variants</h5>
              <div className="flex flex-wrap gap-[var(--spacing-l)]">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="destructive">Destructive Button</Button>
              </div>
            </div>

            {/* Button Sizes */}
            <div>
              <h5 className="text-[var(--wonder-gray-700)] mb-[var(--spacing-l)]">Sizes</h5>
              <div className="flex flex-wrap items-center gap-[var(--spacing-l)]">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            {/* Disabled State */}
            <div>
              <h5 className="text-[var(--wonder-gray-700)] mb-[var(--spacing-l)]">Disabled State</h5>
              <div className="flex flex-wrap gap-[var(--spacing-l)]">
                <Button variant="primary" disabled>Disabled Primary</Button>
                <Button variant="secondary" disabled>Disabled Secondary</Button>
                <Button variant="outline" disabled>Disabled Outline</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-[var(--spacing-4xl)]">
          <h2 className="text-[var(--wonder-gray-900)] mb-[var(--spacing-2xl)]">
            Cards
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-2xl)]">
            {/* Default Card */}
            <Card variant="default">
              <CardHeader>
                <h4>Default Card</h4>
              </CardHeader>
              <CardContent>
                <p>
                  This is a default card variant with a simple border. Perfect for displaying content in a clean, organized way.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="primary" size="sm">Action</Button>
              </CardFooter>
            </Card>

            {/* Bordered Card */}
            <Card variant="bordered">
              <CardHeader>
                <h4>Bordered Card</h4>
              </CardHeader>
              <CardContent>
                <p>
                  This card features a bold border using the Wondermore orange color to draw attention.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" size="sm">Action</Button>
              </CardFooter>
            </Card>

            {/* Elevated Card */}
            <Card variant="elevated">
              <CardHeader>
                <h4>Elevated Card</h4>
              </CardHeader>
              <CardContent>
                <p>
                  This card has a shadow effect to create depth and visual hierarchy on the page.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Action</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Inputs Section */}
        <section className="mb-[var(--spacing-4xl)]">
          <h2 className="text-[var(--wonder-gray-900)] mb-[var(--spacing-2xl)]">
            Inputs
          </h2>
          
          <div className="max-w-2xl space-y-[var(--spacing-2xl)]">
            {/* Basic Input */}
            <Input 
              label="Email Address" 
              type="email"
              placeholder="Enter your email"
              helperText="We'll never share your email with anyone else."
            />

            {/* Input with Error */}
            <Input 
              label="Password" 
              type="password"
              placeholder="Enter your password"
              error="Password must be at least 8 characters long"
            />

            {/* Disabled Input */}
            <Input 
              label="Username" 
              type="text"
              placeholder="Not available"
              disabled
              helperText="This field is currently disabled"
            />

            {/* Input without Label */}
            <Input 
              type="text"
              placeholder="Search..."
            />
          </div>
        </section>

        {/* Color Palette Showcase */}
        <section className="mb-[var(--spacing-4xl)]">
          <h2 className="text-[var(--wonder-gray-900)] mb-[var(--spacing-2xl)]">
            Color Palette
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[var(--spacing-l)]">
            <div className="space-y-[var(--spacing-xs)]">
              <div className="h-24 rounded-[var(--radius-s)] bg-[var(--wonder-yellow-500)]"></div>
              <p className="text-caption text-[var(--wonder-gray-700)]">Wonder Yellow</p>
            </div>
            <div className="space-y-[var(--spacing-xs)]">
              <div className="h-24 rounded-[var(--radius-s)] bg-[var(--wonder-orange-500)]"></div>
              <p className="text-caption text-[var(--wonder-gray-700)]">Wonder Orange</p>
            </div>
            <div className="space-y-[var(--spacing-xs)]">
              <div className="h-24 rounded-[var(--radius-s)] bg-[var(--wonder-orange-red-500)]"></div>
              <p className="text-caption text-[var(--wonder-gray-700)]">Orange-Red</p>
            </div>
            <div className="space-y-[var(--spacing-xs)]">
              <div className="h-24 rounded-[var(--radius-s)] bg-[var(--wonder-deep-red-500)]"></div>
              <p className="text-caption text-[var(--wonder-gray-700)]">Deep Red</p>
            </div>
            <div className="space-y-[var(--spacing-xs)]">
              <div className="h-24 rounded-[var(--radius-s)] bg-[var(--wonder-purple-500)]"></div>
              <p className="text-caption text-[var(--wonder-gray-700)]">Wonder Purple</p>
            </div>
            <div className="space-y-[var(--spacing-xs)]">
              <div className="h-24 rounded-[var(--radius-s)] bg-[var(--wonder-gray-500)]"></div>
              <p className="text-caption text-[var(--wonder-gray-700)]">Wonder Gray</p>
            </div>
          </div>
        </section>

        {/* Typography Showcase */}
        <section>
          <h2 className="text-[var(--wonder-gray-900)] mb-[var(--spacing-2xl)]">
            Typography
          </h2>
          
          <div className="space-y-[var(--spacing-2xl)] bg-white rounded-[var(--radius-l)] p-[var(--spacing-3xl)]">
            <div>
              <h1 className="text-[var(--wonder-orange-500)]">Display Heading</h1>
              <p className="text-caption text-[var(--wonder-gray-500)] mt-[var(--spacing-xs)]">
                H1 • Baikal Ultra Condensed Medium • 80px/120px
              </p>
            </div>
            
            <div>
              <h2 className="text-[var(--wonder-deep-red-500)]">Title Heading</h2>
              <p className="text-caption text-[var(--wonder-gray-500)] mt-[var(--spacing-xs)]">
                H2 • Baikal Ultra Condensed Regular • 47px/71px
              </p>
            </div>
            
            <div>
              <h3 className="text-[var(--wonder-purple-500)]">Subtitle Heading</h3>
              <p className="text-caption text-[var(--wonder-gray-500)] mt-[var(--spacing-xs)]">
                H3 • Baikal Expanded Regular • 36px/54px
              </p>
            </div>
            
            <div>
              <h4 className="text-[var(--wonder-orange-500)]">Heading Text</h4>
              <p className="text-caption text-[var(--wonder-gray-500)] mt-[var(--spacing-xs)]">
                H4 • Baikal Regular • 27px/41px
              </p>
            </div>
            
            <div>
              <h5 className="text-[var(--wonder-gray-900)]">Subheading Text</h5>
              <p className="text-caption text-[var(--wonder-gray-500)] mt-[var(--spacing-xs)]">
                H5 • Baikal Regular • 21px/32px
              </p>
            </div>
            
            <div>
              <p className="text-body text-[var(--wonder-gray-700)]">
                This is body text using Baikal Regular at 16px/24px. It's perfect for paragraphs and longer form content.
              </p>
              <p className="text-caption text-[var(--wonder-gray-500)] mt-[var(--spacing-xs)]">
                Body • Baikal Regular • 16px/24px
              </p>
            </div>
            
            <div>
              <p className="text-body-bold text-[var(--wonder-gray-700)]">
                This is bold body text using Baikal Bold at 16px/24px for emphasis.
              </p>
              <p className="text-caption text-[var(--wonder-gray-500)] mt-[var(--spacing-xs)]">
                Body Bold • Baikal Bold • 16px/24px
              </p>
            </div>
            
            <div>
              <p className="text-body-small text-[var(--wonder-gray-600)]">
                This is small body text using Baikal Regular at 14px/20px.
              </p>
              <p className="text-caption text-[var(--wonder-gray-500)] mt-[var(--spacing-xs)]">
                Body Small • Baikal Regular • 14px/20px
              </p>
            </div>
            
            <div>
              <p className="text-caption text-[var(--wonder-gray-600)]">
                Caption Text Style
              </p>
              <p className="text-caption text-[var(--wonder-gray-500)] mt-[var(--spacing-xs)]">
                Caption • Baikal Regular • 12px/18px • Letter Spacing 0.48px
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
