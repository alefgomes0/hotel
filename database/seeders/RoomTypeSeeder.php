<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoomTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('room_type')->insert([
            'type' => 'Standard',
            'price_per_day' => 150.00,
            'short_description' => 'Cras sed felis eget velit aliquet sagittis id consectetur ultrices dui sapien eget mi proin sed libero enim',
            'full_description' => 'Eget nulla facilisi etiam dignissim diam quis. A pellentesque sit amet porttitor eget dolor morbi non. Posuere morbi leo urna molestie at elementum eu facilisis. Fringilla ut morbi tincidunt augue interdum velit. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Massa massa ultricies mi quis hendrerit dolor magna eget. Malesuada fames ac turpis egestas integer. Euismod nisi porta lorem mollis aliquam ut porttitor. Adipiscing elit ut aliquam purus. Mattis molestie a iaculis at. Penatibus et magnis dis parturient montes nascetur. Turpis massa tincidunt dui ut. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Mi bibendum neque egestas congue quisque. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Nibh mauris cursus mattis molestie a iaculis at. Ornare suspendisse sed nisi lacus sed viverra tellus in hac.',
            'occupants' => 2,
            'size' => 30
        ]);

        DB::table('room_type')->insert([
            'type' => 'Prime',
            'price_per_day' => 250.00,
            'short_description' => 'Auctor augue mauris augue neque gravida in tristique et egestas quis ipsum suspendisse ultrices vitae congue mauris',
            'full_description' => 'Erat nam at lectus urna. Urna cursus eget nunc scelerisque viverra mauris in. Massa tincidunt dui ut ornare. Sapien eget mi proin sed libero. Libero volutpat sed cras ornare arcu. Enim blandit volutpat maecenas volutpat blandit aliquam. Purus gravida quis blandit turpis cursus in hac habitasse platea. Quam viverra orci sagittis eu volutpat odio. Sit amet justo donec enim diam vulputate ut pharetra sit. Massa sapien faucibus et molestie ac feugiat sed. Eget duis at tellus at urna condimentum mattis. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Arcu dui vivamus arcu felis bibendum. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Sit amet luctus venenatis lectus magna fringilla. Nulla facilisi nullam vehicula ipsum a arcu cursus. Faucibus purus in massa tempor nec. Vitae ultricies leo integer malesuada nunc vel. Scelerisque felis imperdiet proin fermentum leo vel orci.',
            'occupants' => 3,
            'size' => 60
        ]);

        DB::table('room_type')->insert([
            'type' => 'Deluxe',
            'price_per_day' => 400.00,
            'short_description' => 'Lacus viverra vitae congue eu consequat ac felis donec et nunc mi ipsum faucibus vitae aliquet tempus scelerisque.',
            'full_description' => 'Sagittis aliquam malesuada bibendum arcu vitae elementum. Blandit turpis cursus in hac. Nec feugiat in fermentum posuere. Lacinia quis vel eros donec ac odio. Quis lectus nulla at volutpat diam ut venenatis. Sit amet aliquam id diam maecenas. Vitae ultricies leo integer malesuada nunc. Aliquet lectus proin nibh nisl condimentum id. Est pellentesque elit ullamcorper dignissim cras tincidunt. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Quis commodo odio aenean sed adipiscing diam donec. Odio eu feugiat pretium nibh ipsum consequat. Morbi tincidunt ornare massa eget egestas. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Nam libero justo laoreet sit amet cursus. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Faucibus turpis in eu mi bibendum neque egestas congue. Volutpat odio facilisis mauris sit amet massa.',
            'occupants' => 2,
            'size' => 90
        ]);
    }
}

